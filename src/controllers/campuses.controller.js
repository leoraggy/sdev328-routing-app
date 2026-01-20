const campuses = [
  {
    id: 1,
    code: "AUB",
    name: "Auburn Campus",
    city: "Auburn",
    open: true,
    programs: ["CS", "IT", "Nursing"],
  },
  {
    id: 2,
    code: "KCC",
    name: "Kent Campus",
    city: "Kent",
    open: true,
    programs: ["CS", "Business"],
  },
  {
    id: 3,
    code: "SEA",
    name: "Seattle Center",
    city: "Seattle",
    open: false,
    programs: ["Continuing Ed"],
  },
  {
    id: 4,
    code: "TAC",
    name: "Tacoma Site",
    city: "Tacoma",
    open: true,
    programs: ["Trades", "IT"],
  },
  {
    id: 5,
    code: "REN",
    name: "Renton Annex",
    city: "Renton",
    open: false,
    programs: ["ESL", "GED"],
  },
];

export const about = (req, res) => {
  res.status(200).json({
    message: "Campus directory routes",
    routes: [
      "GET /",
      "GET /about|/info",
      "GET /:id",
      "GET /search?city=&open=&program=",
    ],
  });
};

export const getAllCampuses = (req, res) => {
  const allCampuses = campuses;

  if (!allCampuses) {
    return res.status(404).json({ message: "No campuses found" });
  }
  return res.status(404).json({ message: "Found", allCampuses });
};

export const getCampusById = (req, res) => {
  const { id } = req.params;

  const campus = campuses.find((el) => {
    return el.id === Number(id);
  });

  if (!campus) {
    return res.status(404).json({ message: "No campus found" });
  }

  return res.status(404).json({ error: "Campus not found", campus });
};

export const searchByFilter = (req, res) => {
  const { city, open, program } = req.query;
  
};
