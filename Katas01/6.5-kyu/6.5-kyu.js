

function getSumNodes(tree) {
    if (!tree || !tree.value) {
        return 0;
    }

    return tree.value + getSumNodes(tree.left) + getSumNodes(tree.right)
}

function getNoldorByMurdered(noldorRoyalHouse, isMurdered) {
    if (noldorRoyalHouse == null || typeof isMurdered != "boolean") {
        return [];
    }

    if (!noldorRoyalHouse || !noldorRoyalHouse.value) {
        return;
    }

    deathToTheElves = [];


}

function pickDeathElves(noldorRoyalHouse) {
    if (!noldorRoyalHouse || !noldorRoyalHouse.value) {
        return;
    }

    return tree.value + getSumNodes(tree.left) + getSumNodes(tree.right)
}


module.exports = { getNoldorByMurdered, getSumNodes };
