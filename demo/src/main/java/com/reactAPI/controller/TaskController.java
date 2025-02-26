package com.reactAPI.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.reactAPI.domain.model.Task;
import com.reactAPI.service.TaskService;

@CrossOrigin(origins = "http://localhost:3000") 
@RestController
@RequestMapping("/tasks")
public class TaskController {

    @Autowired
    private TaskService service;



    @GetMapping
    public List<Task> getTasks(){
        return service.getAllTasks();
    }

    @PostMapping
    public Task addTask(@RequestBody Task task){
        return service.saveTask(task);
    }

    @DeleteMapping
    public void deleteTask(@PathVariable Long id){
        service.deleteTask(id);
    }

}