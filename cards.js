
var stage = new Konva.Stage({
    container: 'canvas',
    width: 250,
    height: 150
});

var layer = new Konva.Layer();

var test = new Konva.Rect({
    x: 20,
    y: 30,
    fill: "pink",
    width: 100,
    height: 100,
    clicked: false,
    id: 44
});

var test2 = new Konva.Rect({
    x: 150,
    y: 30,
    fill: "yellow",
    width: 100,
    height: 100,
    clicked: false,
    id: 45
});


layer.on("click dbltap", function (evt) {

    //alert(evt.target.getId)
    removeCards(evt.target);

});


var rellay = (function () {
    var called = true;
    return function () {
        if (called === true) {
            called = false;
        }
        else {
            called = true;
        }
        return called;
    }
})();

function removeCards(card) {
    var cards = [];
    cards.push(card);

    if (rellay()) {
        if (cards[0].getId === card.getId) {
            return;
        }
        if (cardsAreDestroyable(cards[0], cards[1])) {
            alert(cards[0].getId())
            cards[0].destroy();
            cards[1].destroy();
            layer.draw()
        }

    }

}
function cardsAreDestroyable(first, second) {
    return true;
}



/*test2.on("dblclick dbltap", function () {
    this.destroy();
    layer.draw();
});*/

layer.add(test);
layer.add(test2);
stage.add(layer);
