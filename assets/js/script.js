const words =[
    {word: "Colour", translate: "колір"},
    {word: "Сonflict", translate: "Конфлікт"},
    {word: "Complain", translate: "жалітися"},
    {word: "Collapse", translate: "колапс"},
    {word: "Joy", translate: "радість"},
    {word: "Compass", translate: "компас"},
    {word: "Inquiry", translate: "розслідування"},
    {word: "Saving", translate: "збереження"},
    {word: "Sky", translate: "небо"},
    {word: "Red", translate: "червоний"},
];

$(window).on("load", function() {
    $("#true").css("color", "green");
    $("#false").css("color", "red");

    let length = words.length;
    let random = Math.floor(Math.random() * length), count = 1, temp_words = [10], temp_translate = [10];
    let check = 0;

    for(let i = 0; i < length; i++) {
        random = Math.floor(Math.random() * (length - i)) + i;

        temp_words[i] = words[random].word;
        temp_translate[i] = words[random].translate;

        words[random].word = words[i].word;
        words[random].translate = words[i].translate;

        words[i].word = temp_words[i];
        words[i].translate = temp_translate[i];
    }

    $(".container").html( "<h1>" + temp_words[count - 1] + "</h1>");
    $("#right").on("click", function() {
        if(count < 11) {
            count++;
            $("#count").html(count + " / 11");
            $(".container").html( "<h1>" + temp_words[count - 1] + "</h1>");

            if(check == 0) {
                if($("#answer").val() == temp_translate[count - 2]) {
                    $("#true").text(Number($("#true").text()) + 1);
                }
                else {
                    $("#false").text(Number($("#false").text()) + 1);
                }
            }

            let result = Number($("#true").text());
            if(count == 11)
            {
                $(".container").html( "<h1>" + "</h1>");
                alert("You passed the test in English you have" + " " + result + " " + "correct answers");
            }
        }

    });

    $("#left").on("click", function() {
        if(count != 1)
        {
            count--;
            check++;
            $("#count").html(count + " / 11");
            $(".container").html( "<h1>" + temp_words[count - 1] + "</h1>");
            $("answer").val("");
        }
        else { alert("Error"); }
    });
});
