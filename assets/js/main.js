// lev2_5

let output = document.getElementById("bundeslandInfoErgebnis");
console.log(output);

function check() {

    let bundesland = document.getElementById("bundeslandInfo").value.toLowerCase().trim();
    console.log(bundesland);

    switch (bundesland) {
        case "baden-württemberg":
            output.innerHTML = `Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt`;
            break;
        case "bayern":
            output.innerHTML = `Bayern hat 12.844 Mio Einwohner und München ist die Hauptstadt`;
            break;
        case "berlin":
            output.innerHTML = `Berlin hat 3.520 Mio Einwohner und Berlin ist die Hauptstadt`;
            break;
        case "brandenburg":
            output.innerHTML = `Brandenburg hat 2.485 Mio Einwohner und Potsdam ist die Hauptstadt`;
            break;
        case "bremen":
            output.innerHTML = `Bremen hat 0.671 Mio Einwohner und Bremen ist die Hauptstadt`;
            break;
        case "hamburg":
            output.innerHTML = `Hamburg hat 1.787 Mio Einwohner und Hamburg ist die Hauptstadt`;
            break;
        case "hessen":
            output.innerHTML = `Hessen hat 6.176 Mio Einwohner und Wiesbaden ist die Hauptstadt`;
            break;
        case "mecklenburg-vorpommern":
            output.innerHTML = `Mecklenburg-Vorpommern hat 1.612 Mio Einwohner und Schwerin ist die Hauptstadt`;
            break;
        case "nordrhein-westfalen":
            output.innerHTML = `Nordrhein-Westfalen hat 17.865 Mio Einwohner und Düsseldorf ist die Hauptstadt`;
            break;
        case "niedersachsen":
            output.innerHTML = `Niedersachsen hat 7.927 Mio Einwohner und Hannover ist die Hauptstadt`;
            break;
        case "rheinland-pfalz":
            output.innerHTML = `Rheinland-Pfalz hat 4.053 Mio Einwohner und Mainz ist die Hauptstadt`;
            break;
        case "saarland":
            output.innerHTML = `Saarland hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt`;
            break;
        case "sachsen":
            output.innerHTML = `Sachsen hat 4.085 Mio Einwohner und Dresden ist die Hauptstadt`;
            break;
        case "sachsen-anhalt":
            output.innerHTML = `Sachsen-Anhalt hat 2.245 Mio Einwohner und Magdeburg ist die Hauptstadt`;
            break;
        case "schleswig-holstein":
            output.innerHTML = `Schleswig-Holstein hat 2.859 Mio Einwohner und Kiel ist die Hauptstadt`;
            break;
        case "thüringen":
            output.innerHTML = `Thüringen hat 2.171 Mio Einwohner und Erfurt ist die Hauptstadt`;
            break;
        default:
            output.innerHTML = `Ein solches Bundesland gibt es in Deutschland nicht.`;
    }
}



// lev2_7
{/* <b>Brief und Postkarte</b> <br>
    	L: 10 - 23,5 cm
    	B: 7 - 12,5 cm
    	H: bis 1 cm

<b>DHL Paket 2 kg</b> <br>
      bis 60 x 30 x 15 cm

<b>DHL Paket 5 kg</b> <br>
      bis 120 x 60 x 60 cm

<b>DHL Paket 10 kg</b> <br>
      bis 120 x 60 x 60 cm

"<b>Extra große Größe</b> */}

function showtxt() {

    let output = document.getElementById("masse");
    console.log(output);
    let input = +(document.getElementById("mylist").value);
    console.log(input);

    switch (input) {
        case 0:
            output.innerHTML += `<b>Brief und Postkarte</b> <br>
    	L: 10 - 23,5 cm
    	B: 7 - 12,5 cm
    	H: bis 1 cm`;
            break;
        case 1:
            output.innerHTML += `<b>DHL Paket 2 kg</b> <br>
            bis 60 x 30 x 15 cm`;
            break;
        case 2:
            output.innerHTML += `<b>DHL Paket 5 kg</b> <br>
            bis 120 x 60 x 60 cm`;
            break;
        case 3:
            output.innerHTML += `<b>DHL Paket 10 kg</b> <br>
            bis 120 x 60 x 60 cm`;
            break;

        default:
            output.innerHTML += `<b>Extragröße, gesondert zu berechnen`;
    }

}





