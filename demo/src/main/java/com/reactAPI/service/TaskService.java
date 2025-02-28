package com.reactAPI.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.reactAPI.domain.model.Task;
import com.reactAPI.domain.repository.TaskRepository;

@Service
public class TaskService {

    private final TaskRepository repository;

    @Autowired
    public TaskService(TaskRepository repository) {
        this.repository = repository;
    }

    public List<Task> getAllTasks() {
        return repository.findAll();
    }

    public Task saveTask(Task task) {
        return repository.save(task);
    }

    public void deleteTask(Long id) {
        repository.deleteById(id);
    }

    public Task updateTask(Long id, Task taskDetails) {
        Task task = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Task não encontrada com ID: " + id));
        
        task.setTitle(taskDetails.getTitle());
        task.setDescription(taskDetails.getDescription());
        task.setCompleted(taskDetails.isCompleted());
        
        return repository.save(task);
    }

    public Optional<Task> getTaskById(Long id) {
        return repository.findById(id);
    }

    public List<Task> getCompletedTasks() {
        return repository.findByCompleted(true);
    }
}
