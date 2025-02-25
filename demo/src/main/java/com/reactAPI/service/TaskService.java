package com.reactAPI.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.reactAPI.domain.model.Task;
import com.reactAPI.domain.repository.TaskRepository;

@Service
public class TaskService {
    @Autowired
    private TaskRepository repository;

    public List<Task> getAllTasks(){
        return repository.findAll();
    }

    public Task saveTask(Task task){
        return repository.save(task);
    }

    public void deleteTask(Long id){
        repository.deleteById(id);
    }
}
