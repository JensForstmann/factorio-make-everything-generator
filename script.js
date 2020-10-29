var recipes = [];
var groups = {};
var categories = [];

function processInput() {
    parse(document.getElementById("input").value);

    // console.log("recipes", recipes);
    // console.log("groups", groups);
    // console.log("categories", categories);

    populateFilters();

    populateTable();

}

function populateTable() {
    const table = document.getElementById("table");
    table.innerHTML = "<tr><th>name</th><th>category</th><th>group_name</th><th>subgroup_name</th><th>main_product</th></tr>";
    const filteredRecipes = getFilteredRecipes();
    for (let i = 0; i < filteredRecipes.length; i++) {
        const recipe = filteredRecipes[i];
        const group = groups[recipe.group_name];
        // const subGroup = group.subgroups.filter((sg) => sg.name === recipe.subgroup_name)[0];
        // const category = categories[recipe.category];
        const row = table.insertRow(-1);
        row.insertCell(0).innerHTML = recipe.name;
        row.insertCell(1).innerHTML = recipe.category;
        row.insertCell(2).innerHTML = recipe.group_name;
        row.insertCell(3).innerHTML = recipe.subgroup_name;
        row.insertCell(4).innerHTML = recipe.main_product;
    }
}

function populateFilters() {
    const dynamicFilters = document.getElementById("dynamic-filters");
    dynamicFilters.innerHTML = "";

    const filterList = document.createElement("ul");
    dynamicFilters.appendChild(filterList);

    const categoriesLi = document.createElement("li");
    filterList.appendChild(categoriesLi);
    categoriesLi.appendChild(document.createTextNode("categories"));
    const categoriesUl = document.createElement("ul");
    categoriesLi.appendChild(categoriesUl);

    const categoryNames = Object.keys(categories);
    for (let i = 0; i < categoryNames.length; i++) {
        const categoryName = categoryNames[i];
        const category = categories[categoryName];

        const li = document.createElement("li");

        const input = document.createElement("input");
        input.setAttribute("type", "checkbox");
        input.setAttribute("id", "dynamic-filter-category-" + categoryName);
        input.checked = true;
        category.checked = true;
        category.input = input;
        input.onchange = function (event) {
            category.checked = event.target.checked;
            populateTable();
        }

        const label = document.createElement("label");
        label.setAttribute("for", "dynamic-filter-category-" + categoryName);
        label.innerHTML = categoryName;

        categoriesUl.appendChild(li);
        li.appendChild(input);
        li.appendChild(label);

    }

    const groupsLi = document.createElement("li");
    filterList.appendChild(groupsLi);
    groupsLi.appendChild(document.createTextNode("groups & subgroups"));
    const groupsUl = document.createElement("ul");
    groupsLi.appendChild(groupsUl);

    const groupNames = Object.keys(groups);
    for (let i = 0; i < groupNames.length; i++) {
        const groupName = groupNames[i]
        const group = groups[groupName];
        const subGroups = group.subgroups;

        const li = document.createElement("li");

        const input = document.createElement("input");
        input.setAttribute("type", "checkbox");
        input.setAttribute("id", "dynamic-filter-group-" + groupName);
        input.checked = false;
        group.checked = false;
        group.input = input;
        input.onchange = function (event) {
            group.checked = event.target.checked;
            subGroups.forEach((sg) => {
                sg.checked = event.target.checked;
                sg.input.checked = event.target.checked;
            });
            populateTable();
        }

        const label = document.createElement("label");
        label.setAttribute("for", "dynamic-filter-group-" + groupName);
        label.innerHTML = groupName;

        groupsUl.appendChild(li);
        li.appendChild(input);
        li.appendChild(label);

        const innerUl = document.createElement("ul");
        li.appendChild(innerUl);

        for (let k = 0; k < subGroups.length; k++) {
            const subGroup = subGroups[k];
            const subGroupName = subGroup.name;

            const subLi = document.createElement("li");

            const subInput = document.createElement("input");
            subInput.setAttribute("type", "checkbox");
            subInput.setAttribute("id", "dynamic-filter-subgroup-" + subGroupName);
            subInput.checked = false;
            subGroup.checked = false;
            subInput.onchange = function (event) {
                subGroup.checked = event.target.checked;
                const sumOfChecked = subGroups.reduce((pv, cv) => {
                    return pv + (cv.checked ? 1 : 0);
                }, 0);
                if (sumOfChecked === 0) {
                    group.checked = false;
                    group.input.checked = false;
                    group.input.indeterminate = false;
                } else if (sumOfChecked === subGroups.length) {
                    group.checked = true;
                    group.input.checked = true;
                    group.input.indeterminate = false;
                } else {
                    group.checked = true;
                    group.input.indeterminate = true;
                }
                populateTable();
            }

            subGroup.input = subInput;

            const subLabel = document.createElement("label");
            subLabel.setAttribute("for", "dynamic-filter-subgroup-" + subGroupName);
            subLabel.innerHTML = subGroupName;

            innerUl.appendChild(subLi);
            subLi.appendChild(subInput);
            subLi.appendChild(subLabel);
        }
    }

}

function filterGroup(groupName, state) {

}

function parse(input) {
    const recipesInput = input.split("-----");

    recipes = [];
    for (let i = 0; i < recipesInput.length; i++) {
        const recipeInput = recipesInput[i].trim();
        const lines = recipeInput.split("\n");
        const recipe = {
            item_ingredients: []
        };

        let isValid = false;
        for (let l = 0; l < lines.length; l++) {
            const line = lines[l].trim();
            if (line) {
                isValid = true;
                const parts = line.split(":");
                const key = parts.shift();
                const value = parts.join(":").trim();
                if (key === "item_ingredient_name") {
                    recipe.item_ingredients.push(value);
                } else {
                    recipe[key] = value;
                }
            }
        }

        if (isValid) {
            recipes.push(recipe);
        }
    }
    recipes.sort((a, b) => {
        if (a.group_name === b.group_name) {
            if (a.subgroup_name === b.subgroup_name) {
                return a.order > b.order ? 1 : -1;
            }
            return a.subgroup_order > b.subgroup_order ? 1 : -1;
        }
        return a.group_order > b.group_order ? 1 : -1;
    });

    categories = {};
    recipes.forEach((recipe) => {
        if (!categories[recipe.category]) {
            categories[recipe.category] = {};
        }
    });

    groups = {};
    recipes.forEach((recipe) => {
        if (!groups[recipe.group_name]) {
            groups[recipe.group_name] = {
                order: recipe.group_order,
                subgroups: []
            };
        }

        if (groups[recipe.group_name].subgroups.filter((sg) => sg.name === recipe.subgroup_name).length === 0) {
            groups[recipe.group_name].subgroups.push({
                name: recipe.subgroup_name,
                order: recipe.subgroup_order
            });
        }
    });
}

function getFilteredRecipes() {
    const filteredRecipes = [];
    for (let i = 0; i < recipes.length; i++) {
        const recipe = recipes[i];
        const group = groups[recipe.group_name];
        const subGroup = group.subgroups.filter((sg) => sg.name === recipe.subgroup_name)[0];
        const category = categories[recipe.category];
        if (subGroup.checked === true && category.checked) {
        // if (recipe.group_name === "logistics" && (recipe.category === "crafting" || recipe.category === "crafting-with-fluid")) { // TODO remove
            filteredRecipes.push(recipe);
        }
    }
    return filteredRecipes;
}

function generateOutput() {
    const filteredRecipes = getFilteredRecipes();

    const machineName = document.getElementById("machine").value;
    const machineWidth = parseInt(document.getElementById("machine-width").value);
    const machineHeight = parseInt(document.getElementById("machine-height").value);
    const machineSpeed = parseInt(document.getElementById("machine-speed").value);
    const rowLength = parseInt(document.getElementById("row-length").value);
    const machineSpace = parseInt(document.getElementById("machine-space").value);
    const rowSpace = parseInt(document.getElementById("row-space").value);
    const sourceChestName = document.getElementById("source-chest").value;
    const requestFromBuffers = document.getElementById("request-from-buffers").checked;
    const sourceChestWidth = parseInt(document.getElementById("source-chest-width").value);
    const sourceChestHeight = parseInt(document.getElementById("source-chest-height").value);
    const targetChestName = document.getElementById("target-chest").value;
    const targetChestSetRequest = document.getElementById("target-chest-set-request").checked;
    const targetChestWidth = parseInt(document.getElementById("target-chest-width").value);
    const targetChestHeight = parseInt(document.getElementById("target-chest-height").value);
    const inserterName = document.getElementById("inserter").value;
    const outserterName = document.getElementById("outserter").value;

    const bp = {
        "blueprint": {
            "icons": [
                {
                    "signal": {
                        "type": "item",
                        "name": "constant-combinator"
                    },
                    "index": 1
                }
            ],
            "entities": [],
            "item": "blueprint",
            "version": 68722819072
        }
    };

    const entities = bp.blueprint.entities;

    for (let i = 0; i < filteredRecipes.length; i++) {
        const recipe = filteredRecipes[i];

        const row = Math.floor(i / rowLength);
        const machineInRow = i % rowLength;

        const x = machineInRow * (machineSpace + Math.max(machineWidth, sourceChestWidth + targetChestWidth));
        const y = row * (machineHeight + rowSpace + Math.max(sourceChestHeight + targetChestHeight));

        const machine = {
            "entity_number": 5 * i + 1,
            "name": machineName,
            "position": {
                "x": x + machineWidth / 2,
                "y": y + machineHeight / 2
            },
            "recipe": recipe.name
        };

        const inserter = {
            "entity_number": 5 * i + 2,
            "name": inserterName,
            "position": {
                "x": x + 0.5,
                "y": y + machineHeight + 0.5
            },
            "direction": 4
        };

        const outserter = {
            "entity_number": 5 * i + 3,
            "name": outserterName,
            "position": {
                "x": x + 0.5 + sourceChestWidth,
                "y": y + machineHeight + 0.5
            },
            "control_behavior": {
                "logistic_condition": {
                    "first_signal": {
                        "type": "item",
                        "name": recipe.main_product
                    },
                    "constant": recipe.main_product_stack_size,
                    "comparator": "<"
                },
                "connect_to_logistic_network": true
            }
        };

        const sourceChest = {
            "entity_number": 5 * i + 4,
            "name": sourceChestName,
            "position": {
                "x": x + sourceChestWidth / 2,
                "y": y + machineHeight + 1 + sourceChestHeight / 2
            },
            "request_filters": recipe.item_ingredients.map((ing, i) => {
                const count = ing.split(" ")[0];
                const name = ing.split(" ")[1];
                return {
                    "index": i + 1,
                    "name": name,
                    "count": recipe.request_paste_multiplier === 1 ? count : Math.floor(count * recipe.request_paste_multiplier * machineSpeed / recipe.energy)
                };
            }),
            "request_from_buffers": requestFromBuffers
        };

        const targetChest = {
            "entity_number": 5 * i + 5,
            "name": targetChestName,
            "position": {
                "x": x  + sourceChestWidth + targetChestWidth / 2,
                "y": y + machineHeight + 1 + targetChestHeight / 2
            }
        };

        if (targetChestSetRequest) {
            targetChest.request_filters = [
                {
                    "index": 1,
                    "name": recipe.main_product,
                    "count": recipe.main_product_stack_size * 10
                }
            ];
        }

        entities.push(machine);
        entities.push(inserter);
        entities.push(outserter);
        entities.push(sourceChest);
        entities.push(targetChest);
    }
    document.getElementById("output").value = JSON.stringify(bp, null, 2);
    document.getElementById("output-bpstring").value = "0" + Base64.encodeU(
        pako.deflate(
            new TextEncoder("utf-8").encode(
                JSON.stringify(bp)
            ),
            { level: 9 }
        )
    );



}
