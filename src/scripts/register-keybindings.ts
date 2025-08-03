import type { PartyPF2e } from "@actor";

export function registerKeybindings(): void {
    game.keybindings.register("pf2e", "cycle-token-stack", {
        name: "PF2E.Keybinding.CycleTokenStack.Label",
        hint: "PF2E.Keybinding.CycleTokenStack.Hint",
        editable: [{ key: "KeyZ", modifiers: [] }],
        onUp: (): boolean => canvas.tokens.cycleStack(),
    });

    game.keybindings.register("pf2e", "toggle-party-sheet", {
        name: "PF2E.Keybinding.TogglePartySheet.Label",
        hint: "PF2E.Keybinding.TogglePartySheet.Hint",
        editable: [{ key: "KeyP", modifiers: [] }],
        onDown: (): boolean | null => {
            const party = ((): PartyPF2e | null => {
                if (game.user.isGM) {
                    const token =
                        canvas.ready && canvas.tokens.controlled.length === 1 ? canvas.tokens.controlled[0] : null;
                    return token?.actor?.isOfType("party") ? token.actor : game.actors.party;
                } else if (game.user.character?.isOfType("character")) {
                    const pcParties = Array.from(game.user.character.parties);
                    return pcParties.find((p) => p.active) ?? pcParties.at(0) ?? null;
                }
                return null;
            })();
            if (!party) return false;

            const { sheet } = party;
            if (sheet.rendered) {
                if (sheet._minimized) {
                    sheet.maximize();
                } else {
                    sheet.close();
                }
            } else {
                sheet.render(true);
            }

            return true;
        },
    });

    // Record the last tab that was open
    let previousCompendiumBrowserTab = "";
    game.keybindings.register("pf2e", "open-compendium-browser", {
        name: "PF2E.Keybinding.OpenCompendiumBrowser.Label",
        hint: "PF2E.Keybinding.OpenCompendiumBrowser.Hint",
        editable: [],
        onDown: (): boolean => {
            const cb = game.pf2e.compendiumBrowser;
            if (cb.rendered) {
                if (cb.minimized) {
                    cb.maximize();
                } else {
                    previousCompendiumBrowserTab = cb.element.querySelector("nav .active")?.dataset.tabName ?? "";
                    cb.close();
                }
            } else if (previousCompendiumBrowserTab) {
                cb.tabs[previousCompendiumBrowserTab].open();
            } else {
                cb.render({ force: true });
            }
            return true;
        },
    });

    // Defer to the GM Vision module if enabled
    if (!game.modules.get("gm-vision")?.active) {
        game.keybindings.register("pf2e", "gmVision", {
            name: "PF2E.Keybinding.GMVision.Label",
            hint: "PF2E.Keybinding.GMVision.Hint",
            editable: [{ key: "KeyG", modifiers: ["Control"] }],
            restricted: true,
            onDown: (): boolean => {
                if (ui.controls.control?.name === "lighting") {
                    // Ensure the toggle in lighting controls continues to reflect the current status
                    const toggle = ui.controls.control.tools.gmVision;
                    toggle?.onChange?.(new PointerEvent("click"), !game.pf2e.settings.gmVision); // Does the same as below
                } else {
                    game.settings.set("pf2e", "gmVision", !game.settings.get("pf2e", "gmVision"));
                }
                return true;
            },
        });
    }
}
