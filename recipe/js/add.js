function a_function_idk()
{
    input_box = document.getElementById("recipeName");
    recipe_name = input_box.value;

    link_box = document.getElementById("link");
    link_value = link_box.value;

    if(recipe_name.length == 0 || link_value.length==0)
    {
        return;
    }

    //else, add to our recipe list
    recipe_list = document.getElementById("recipes");
    new_recipe = document.createElement("li");
    new_recipe.innerHTML = '<a href="' + link_value + '">' + recipe_name + '</a>';
    recipe_list.appendChild(new_recipe);
    
}

btn = document.getElementById("addRecipeBtn");
btn.addEventListener("click", a_function_idk);