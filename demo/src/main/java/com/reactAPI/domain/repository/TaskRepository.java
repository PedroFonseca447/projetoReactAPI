package com.reactAPI.domain.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.reactAPI.domain.model.Task;


@Repository 
public interface TaskRepository extends JpaRepository<Task, Long> {

    List<Task> findByCompleted(boolean completed);
}
