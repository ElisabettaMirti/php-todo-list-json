<?php

header('Content-Type: application/json');
$todoList = file_get_contents('../db/toDoList.json');
echo $todoList;