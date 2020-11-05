const CheatCommand = `/c local recipes = ""
for _, recipe in pairs(game.player.force.recipes) do
    local recipe_prototype = recipe.prototype
    local recipe = "-----\\n"
        .. "name: " .. recipe_prototype.name .. "\\n"
        .. "enabled: " .. tostring(recipe.enabled) .. "\\n"
        .. "hidden: " .. tostring(recipe.hidden) .. "\\n"
        .. "unlock_results: " .. tostring(recipe_prototype.unlock_results) .. "\\n"
        .. "category: " .. recipe_prototype.category .. "\\n"
        .. "order: " .. recipe_prototype.order .. "\\n"
        .. "energy: " .. recipe_prototype.energy .. "\\n"
        .. "group_name: " .. recipe_prototype.group.name .. "\\n"
        .. "group_order: " .. recipe_prototype.group.order .. "\\n"
        .. "subgroup_name: " .. recipe_prototype.subgroup.name .. "\\n"
        .. "subgroup_order: " .. recipe_prototype.subgroup.order .. "\\n"
        .. "request_paste_multiplier: " .. recipe_prototype.request_paste_multiplier .. "\\n"
    if recipe_prototype.main_product then
        recipe = recipe
            .. "main_product: " .. recipe_prototype.main_product.name .. "\\n"
        if game.item_prototypes[recipe_prototype.main_product.name] then
            recipe = recipe
                .. "main_product_stack_size: " .. game.item_prototypes[recipe_prototype.main_product.name].stack_size .. "\\n"
        end
    end
        
    for _, ing in pairs(recipe_prototype.ingredients) do
        if game.item_prototypes[ing.name] then
            recipe = recipe .. "item_ingredient_name: " .. ing.amount .. " " .. ing.name .. "\\n"
        end
    end
    recipes = recipes .. "\\n" .. recipe
end
game.write_file("recipes_dump.txt", recipes)`;

export default CheatCommand;
