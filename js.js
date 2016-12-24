var text = "";

function create() {
    for (var i = 0; i < arguments[0].length; i++) {
        text += '<span class="slova' + i + '">' + arguments[0][i] + '</span>'
    };
    console.log(text);
}
create([1, 2, 3, 4, 5]);