const mongoose = require("mongoose");

require("dotenv").config();

// Models
const Airport = require("./models/airport");
const User = require("./models/user");

// xlsx
const xlsx = require("node-xlsx");
const obj = xlsx.parse(__dirname + "/assets/files/personal.xlsx");
const data = obj[0].data;

const objSede = xlsx.parse(__dirname + "/assets/files/sede.xlsx");
const dataSede = objSede[0].data;

function saveUsers() {
  dataSede.map(async (employee) => {
    let password = "";
    // A default password is chosen according to the airport
    if (employee[0] == "AEROPUERTO ALBERTO CARNEVALLI - MERIDA")
      password = "alberto_carnevalli";
    if (employee[0] == "AEROPUERTO CACIQUE ARAMARE")
      password = "cacique_aramare";
    if (employee[0] == "AEROPUERTO DE HIGUEROTE") password = "higuerote";
    if (employee[0] == "AEROPUERTO INTERNACIONAL ARTURO MICHELENA")
      password = "arturo_michelena";
    if (employee[0] == "AEROPUERTO INTERNACIONAL BARTOLOME SALOM")
      password = "bartolome_salom";
    if (employee[0] == "AEROPUERTO INTERNACIONAL DE SANTA ELENA DE UAIREN")
      password = "santa_elena_uairen";
    if (employee[0] == "AEROPUERTO INTERNACIONAL G/D JOSE ANTONIO ANZOATEGUI")
      password = "jose_antonio_anzoategui";
    if (
      employee[0] ==
      "AEROPUERTO INTERNACIONAL GRAL. JUAN VICENTE GOMEZ-SAN ANTONIO DEL TACHIRA"
    )
      password = "juan_vicente_gomez";
    if (employee[0] == "AEROPUERTO INTERNACIONAL JACINTO LARA")
      password = "jacinto_lara";
    if (employee[0] == "AEROPUERTO INTERNACIONAL JOSE TADEO MONAGAS")
      password = "jose_tadeo_monagas";
    if (employee[0] == "AEROPUERTO INTERNACIONAL JUAN PABLO PEREZ ALFONZO")
      password = "juan_pablo_perez_alfonzo";
    if (employee[0] == "AEROPUERTO INTERNACIONAL LA CHINITA")
      password = "la_chinita";
    if (employee[0] == "AEROPUERTO INTERNCIONAL G/J SANTIAGO MARIÑO")
      password = "santiago_marino";
    if (employee[0] == "AEROPUERTO JUAN PABLO PEREZ ALFONZO - EL VIGIA")
      password = "juan_pablo_perez_alfonzo";
    if (employee[0] == "AEROPUERTO MAYOR BUENAVENTURA VIVAS GUERRERO")
      password = "mayor_buenaventura_vivas_guerrero";
    if (employee[0] == "AEROPUERTO METROPOLITANO DE OCUMARE DEL TUY")
      password = "metropolitano_ocumare_tuy";
    if (employee[0] == "AEROPUERTO NACIONAL ALBERTO CARNEVALLI")
      password = "alberto_carnevalli";
    if (employee[0] == "AEROPUERTO NACIONAL DE ANACO")
      password = "nacional_anaco";
    if (employee[0] == "AEROPUERTO NACIONAL DE CALABOZO")
      password = "nacional_calabozo";
    if (employee[0] == "AEROPUERTO NACIONAL DE PARAMILLO")
      password = "nacional_paramillo";
    if (employee[0] == "AEROPUERTO NACIONAL DON EDMUNDO BARRIOS")
      password = "edmundo_barrios";
    if (employee[0] == "AEROPUERTO NACIONAL FRANCISCO GARCIA DE HEVIA")
      password = "francisco_garcia_hevia";
    if (employee[0] == "AEROPUERTO NACIONAL GUASIPATI")
      password = "nacional_guasipati";
    if (employee[0] == "AEROPUERTO NACIONAL LA PARAGUA")
      password = "nacional_paragua";
    if (employee[0] == "AEROPUERTO NACIONAL LUEPA") password = "nacional_luepa";
    if (employee[0] == "AEROPUERTO NACIONAL TUMEREMO")
      password = "nacional_tumeremo";
    if (employee[0] == "AEROPUERTO NESTOR ARIAS") password = "nestor_arias";
    if (employee[0] == "AEROPUERTO OSCAR MACHADO ZULOAGA")
      password = "oscar_machado_zuloaga";
    if (employee[0] == "JUBILADOS AEROPUERTO INTERNACIONAL JACINTO LARA")
      password = "jacinto_lara";
    if (employee[0] == "JUBILADOS AEROPUERTO NACIONAL JUAN VICENTE GOMEZ")
      password = "juan_vicente_gomez";
    if (employee[0] == "PENSIONADOS Y JUBILADOS SANTIAGO MARIÑO")
      password = "santiago_marino";
    if (
      employee[0] ==
      "PERSONAL PENSIONADO Y JUBILADO DEL AEROPUERTO JOSE ANTONIO DE ANZOATEGUI"
    )
      password = "jose_antonio_anzoategui";
    if (employee[0] == "BAER SEDE CENTRAL") password = "sede_central";

    const newUser = new User({
      airport: employee[0],
      ci: employee[1],
      lastName: employee[2],
      firstName: employee[3],
      password,
    });

    newUser.password = await newUser.encryptPassword(password);

    await newUser.save();
  });
}

async function saveAdmin() {
  const password = "admin123321**";
  const newUser = new User({
    airport: "ADMINISTRADOR",
    ci: "00000000",
    lastName: "Maestro",
    firstName: "Administrador",
    password,
    isAdmin: true,
  });

  newUser.password = await newUser.encryptPassword(password);

  await newUser.save();
}

async function saveAirports() {
  const airports = [
    // { name: "AEROPUERTO ALBERTO CARNEVALLI - MERIDA" },
    // { name: "AEROPUERTO CACIQUE ARAMARE" },
    // { name: "AEROPUERTO DE HIGUEROTE" },
    // { name: "AEROPUERTO INTERNACIONAL ARTURO MICHELENA" },
    // { name: "AEROPUERTO INTERNACIONAL BARTOLOME SALOM" },
    // { name: "AEROPUERTO INTERNACIONAL DE SANTA ELENA DE UAIREN" },
    // {
    //   name: "AEROPUERTO INTERNACIONAL G/D JOSE ANTONIO ANZOATEGUI",
    // },
    // {
    //   name:
    //     "AEROPUERTO INTERNACIONAL GRAL. JUAN VICENTE GOMEZ-SAN ANTONIO DEL TACHIRA",
    // },
    // { name: "AEROPUERTO INTERNACIONAL JACINTO LARA" },
    // { name: "AEROPUERTO INTERNACIONAL JOSE TADEO MONAGAS" },
    // { name: "AEROPUERTO INTERNACIONAL JUAN PABLO PEREZ ALFONZO" },
    // { name: "AEROPUERTO INTERNACIONAL LA CHINITA" },
    // { name: "AEROPUERTO INTERNCIONAL G/J SANTIAGO MARIÑO" },
    // { name: "AEROPUERTO JUAN PABLO PEREZ ALFONZO - EL VIGIA" },
    // { name: "AEROPUERTO MAYOR BUENAVENTURA VIVAS GUERRERO" },
    // { name: "AEROPUERTO METROPOLITANO DE OCUMARE DEL TUY" },
    // { name: "AEROPUERTO NACIONAL ALBERTO CARNEVALLI" },
    // { name: "AEROPUERTO NACIONAL DE ANACO" },
    // { name: "AEROPUERTO NACIONAL DE CALABOZO" },
    // { name: "AEROPUERTO NACIONAL DE PARAMILLO" },
    // { name: "AEROPUERTO NACIONAL DON EDMUNDO BARRIOS" },
    // { name: "AEROPUERTO NACIONAL FRANCISCO GARCIA DE HEVIA" },
    // { name: "AEROPUERTO NACIONAL GUASIPATI" },
    // { name: "AEROPUERTO NACIONAL LA PARAGUA" },
    // { name: "AEROPUERTO NACIONAL LUEPA" },
    // { name: "AEROPUERTO NACIONAL TUMEREMO" },
    // { name: "AEROPUERTO NESTOR ARIAS" },
    // { name: "AEROPUERTO OSCAR MACHADO ZULOAGA" },
    // { name: "JUBILADOS AEROPUERTO INTERNACIONAL JACINTO LARA" },
    // { name: "JUBILADOS AEROPUERTO NACIONAL JUAN VICENTE GOMEZ" },
    // { name: "PENSIONADOS Y JUBILADOS SANTIAGO MARIÑO" },
    // {
    //   name:
    //     "PERSONAL PENSIONADO Y JUBILADO DEL AEROPUERTO JOSE ANTONIO DE ANZOATEGUI",
    // },
    { name: "BAER SEDE CENTRAL" },
  ];

  await Airport.insertMany(airports);
}

mongoose
  .connect(process.env.DATABASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(async () => {
    console.log("Database is connected");
    saveUsers();
    // await saveAdmin();
    await saveAirports();
    console.log("Data created successfully");
    process.exit();
  })
  .catch((err) => console.error(err));
