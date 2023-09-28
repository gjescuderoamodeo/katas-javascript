

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

    noldorRoyalHouse.children.forEach(element => {
        if (element.murdered == isMurdered) {
            deathToTheElves.push(element);
        }
    });

    return deathToTheElves;

}

/*function getNoldorByMurdered(noldorRoyalHouse, isMurdered) {
    if (!Array.isArray(noldorRoyalHouse) || typeof isMurdered !== "boolean") {
        return [];
    }

    const members = [];

    function findMembersWithMurderedStatus(house) {
        if (house.murdered === isMurdered) {
            const member = {
                name: house.name,
                lifespan: house.lifespan,
                murdered: house.murdered,
                cause_of_death: house.cause_of_death,
                children: [],
            };

            if (Array.isArray(house.children)) {
                member.children = house.children.map(child => child.name);
            }

            members.push(member);
        }
        if (Array.isArray(house.children)) {
            house.children.forEach(child => findMembersWithMurderedStatus(child));
        }
    }

    noldorRoyalHouse.forEach(member => {
        findMembersWithMurderedStatus(member);
    });

    return members;
} */



module.exports = { getNoldorByMurdered, getSumNodes };
