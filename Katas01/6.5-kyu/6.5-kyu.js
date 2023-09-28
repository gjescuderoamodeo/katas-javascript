

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

    let deathToTheElves = [];

    noldorRoyalHouse.forEach(element => {
        if (element.murdered == isMurdered) {
            deathToTheElves.push(element);
            if (element.children.length != 0) {
                //por cada hijo saco lo mismo
                element.children.forEach(element => {
                    getNoldorByMurdered2(element.children, isMurdered);
                })
            }
        }
    });

    return deathToTheElves;

}

function getNoldorByMurdered2(hijo, isMurdered) {
    let deathToTheElves = []
    hijo.forEach(element => {
        if (element.murdered == isMurdered) {
            deathToTheElves.push(element);
            if (element.children.length != 0) {
                //por cada hijo saco lo mismo
                element.children.forEach(element => {
                    getNoldorByMurdered2(element.children, isMurdered);
                })
            }
        }
    });
    return deathToTheElves;
}


module.exports = { getNoldorByMurdered, getSumNodes };
