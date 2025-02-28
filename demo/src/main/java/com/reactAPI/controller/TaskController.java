package com.reactAPI.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.reactAPI.domain.model.Task;
import com.reactAPI.service.TaskService;

@CrossOrigin(origins = "http://localhost:3000") // Permite chamadas do frontend React localmente
@RestController
@RequestMapping("/tasks")
public class TaskController {

    private final TaskService service;

    public TaskController(TaskService service) {
        this.service = service;
    }

    @PostMapping
    public Task createTask(@RequestBody Task task) {
        return service.saveTask(task);
    }

    @GetMapping
    public List<Task> getAllTasks() {
        return service.getAllTasks();
    }

     @GetMapping("/{id}")
    public Optional<Task> getTaskById(@PathVariable Long id) {
        return service.getTaskById(id);
    }

      @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable Long id) {
        service.deleteTask(id);
    }

     @PutMapping("/{id}")
    public Task updateTask(@PathVariable Long id, @RequestBody Task taskDetails) {
        return service.updateTask(id, taskDetails);
    }

}
