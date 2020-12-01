window.addEventListener("load", function () {
    document.querySelector('button').addEventListener("click", function () {

    var artyom = new Artyom();
    artyom.addCommands([
        {
        indexes: ["Hallo Spirit"],
        action: function (i) {
            document.getElementById('ausgabe--artyom').innerHTML ="Hallo Volkan, wie kann ich helfen? ";
            artyom.say("Hallo Volkan, wie kann ich helfen?");
            }
        },
    
    {
        indexes: ["Wie viel Zeit bleibt mir bis zur Klausurenphase"],
        action: function (i) {
            document.getElementById('ausgabe--artyom').innerHTML ="Es verbleiben 10 Tage bis zur Klausurenphase, fang schon mal an zu lernen";
            artyom.say("Es verbleiben 10 Tage bis zur Klausurenphase, fang schon mal an zu lernen");
            }
        },
    {
        indexes: ["gab es veränderungen für den heutigen stundenplan"],
        action: function (i) {
            document.getElementById('ausgabe--artyom').innerHTML ="Ja, die Vorlesung Interface Design, welche um 9Uhr 45 stattfindet, fällt heute aus. Soll ich dein Postfach nach aktuellen Nachrichten durchssuchen? ";
            artyom.say("Ja, die Vorlesung Interface Design, welche um 9Uhr 45 stattfindet, fällt heute aus. Soll ich dein Postfach nach aktuellen Nachrichten durchssuchen?");
            }
        },
    {
        indexes: ["überprüfe mein Postfach"],
        action: function (i) {
            document.getElementById('ausgabe--artyom').innerHTML ="Du hast eine neue Nachricht. Soll ich sie dir Vorlesen?";
            artyom.say("Du hast eine neue Nachricht. Soll ich sie dir Vorlesen?");
            }
        },
    {
        indexes: ["Lies mir die Nachricht vor"],
        action: function (i) {
            document.getElementById('ausgabe--artyom').innerHTML ="Nachricht von Professor Rausch: Ich muss leider die Vorlesung für heute absagen. Bitte bearbeitet die Aufgabe 2 selbstständig weiter";
            artyom.say("Nachricht von Professor Rausch: Ich muss leider die Vorlesung für heute absagen. Bitte bearbeitet die Aufgabe 2 selbstständig weiter.");
            }
        },
    
    {    
        indexes: ["nein danke"],
        action: function (i) {
            document.getElementById('ausgabe--artyom').innerHTML ="Alles klar.";
            artyom.say("Alles klar.");
            }
        },

    {    
        indexes: ["Wann kommt der nächste Bus zur Hochschule"],
        action: function (i) {
            document.getElementById('ausgabe--artyom').innerHTML ="Der nächste Bus fährt um 15:13Uhr an der Haltestelle Ludwig-Schule ab. Möchstest du erfahren, wann der nächste Bus zur Hochschule abfährt?";
            artyom.say("Der nächste Bus fährt um 15Uhr 13 an der Haltestelle Ludwig-Schule ab. Möchtest du erfahren, wann der nächste Bus zur Hochschule abfährt?");
            }
        },
    {
        indexes: ["Wann würde der nächste kommen"],
        action: function (i) {
            document.getElementById('ausgabe--artyom').innerHTML ="Der nächste Bus fährt um 16:13Uhr an der Haltestelle Ludwig-Schule ab. Möchtest du erfahren, wann der nächste Bus zur Hochschule abfährt";
                artyom.say("Der nächste Bus fährt um 16Uhr 13 an der Haltestelle Ludwig-Schule ab. Möchtest du erfahren, wann der nächste Bus zur Hochschule abfährt");
            }
        },

    {
        indexes: ["wie sieht mein stundenplan für heute aus"],
        action: function (i) {
            document.getElementById('ausgabe--artyom').innerHTML ="Hier deine heutigen Veranstaltungen: 9Uhr 45 bis 13 Uhr: Interface Design, anschließend 14:15Uhr bis 16:00Uhr: Projektstudium";
            artyom.say("Hier deine heutigen Veranstaltungen: 9Uhr 45 bis 13 Uhr: Interface Design, anschließend 14Uhr 15 bis 16 Uhr: Projektstudium");
            }
        }, 
]);
    function startContinuousArtyom() {
        artyom.fatality();
        setTimeout(function () {
            artyom.initialize({
                lang: "de-DE",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true
            }).then(function () {
                console.log("Ready!");
            });
        }, 250);
    }
    startContinuousArtyom();
});
});
//# sourceMappingURL=playgroud-artyom-script.js.map