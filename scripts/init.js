
Hooks.once("init", async () => {
    if (game.system.id !== "swnr") {
        return;
    }

    if (typeof Babele !== "undefined") {
        Babele.get().register({
            module: "swn-ru",
            lang: "ru",
            dir: "i18n/compendium",
        });
    } else {
        new Dialog({
            title: "Перевод библиотек",
            content: `<p>Для перевода библиотек системы Звезды Без Числа требуется установить и активировать модуль <b>Babele</b><p>`,
            buttons: {
                done: {
                    label: "Хорошо",
                },
            },
        }).render(true);
    }
});