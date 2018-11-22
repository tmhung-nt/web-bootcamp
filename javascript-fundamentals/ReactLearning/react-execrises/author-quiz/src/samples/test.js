const characters = {
    "lady-glasses": "https://s.pluralsight.com/authorkit/img/People/Gray/Geek_Female_Circle_Gray.png",
    "tie-guy": "https://s.pluralsight.com/authorkit/img/People/Gray/Male_1_Circle_Gray.png"
  };

Object.keys(characters).map(
    (name)          =>    ["/top/left/", "/top/right/", "/bottom/left/", "/bottom/right/"].map(
        (corner)    =>    ["Gray", "Green", "Orange", "Purple"].map(
            (color) =>    console.log(`${corner}${name}/${color}`)
        )
    )
);