var friends = [
  {
    name: "Ahmed",
    photo: "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAq7AAAAJDAwYzI4NTQ4LWYwZWUtNGFkYS1hNTYwLTZjYzkwY2ViZDA3OA.jpg",
    scores: [
      "3",
      "2",
      "3",
      "5",
      "4",
      "1",
      "3",
      "5",
      "5",
      "1"
    ]
  },
  {
    name: "Josh",
    photo: "https://avatars0.githubusercontent.com/u/131433?s=460&v=4",
    scores: [
      "5",
      "5",
      "5",
      "2",
      "2",
      "2",
      "2",
      "1",
      "1",
      "1"
    ]
  },
  {
    name: "Kate",
    photo: "data:image/jpeg;base64,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",
    scores: [
      "1",
      "1",
      "4",
      "4",
      "4",
      "5",
      "3",
      "3",
      "1",
      "5"
    ]
  },
  {
    name: "Steve",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDz0BzS0YaZU-lpq2CxpMI2Ynj3l-Y8RbwkZ1xo45_dAlsqlBdsA",
    scores: [
      "2",
      "2",
      "5",
      "1",
      "3",
      "1",
      "5",
      "1",
      "2",
      "1"
    ]
  },
  {
    name: "Ashley",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStuYMYTUNC8VLZB7rLsqQU38WkMelfJNOVp1s22UMsw54ua9lj",
    scores: [
      "2",
      "1",
      "1",
      "1",
      "4",
      "5",
      "5",
      "1",
      "3",
      "2"
    ]
  }

];

// export array for other files to access
module.exports = friends;
