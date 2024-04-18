#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let todos : string[] = ["bilal","ratan lal"];

async function createTodo(todos:string[]) {
    do{
        let ans = await inquirer.prompt({
            type: "list",
            name: "select",
            message: "select an option : ?",
            choices: ["Add Task", "Update Task", "View Todo-List", "Delete Task"],
                
        });
        if (ans.select === "Add Task"){
            let addTodo = await inquirer.prompt({
                type: "input",
                name: "todo",
                message: "Enter a Add item : ",
            });
            todos.push(addTodo.todo);
            console.log(chalk.green(todos));
        }
        if (ans.select ===  "Update Task"){
            let updateTodo = await inquirer.prompt({
                name: "todo",
                type: "list",
                message: "Select an item to update : ",
                choices: todos.map(item => item)
            });
            let addTodo = await inquirer.prompt({
                name: "todo",
                type: "input",
                message: "Enter additional item to update :",
            });
            let newTodos = todos.filter(val => val != updateTodo.todo);
            todos=[...newTodos, addTodo.todo];
            console.log(chalk.bgYellowBright(todos));
        }
        if (ans.select ===  "View Todo-List"){
            console.log(chalk.bgBlueBright(todos));
        }
        if (ans.select ===  "Delete Task"){
            let deleteTodo = await inquirer.prompt({
                name: "todo",
                type: "list",
                message: "Select an item to delete : ",
                choices: todos.map(item => item)
            });
            let newTodos = todos.filter(val => val != deleteTodo.todo);
            todos=[...newTodos];
            console.log(chalk.redBright(todos));
        }
            
    }while(true);
}
createTodo(todos);




