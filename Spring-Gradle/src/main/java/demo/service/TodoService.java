package demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import demo.api.dto.TodoItem;

@Service
public interface TodoService<K> {
	List<TodoItem> getAll();

	TodoItem getOne(K id);

	TodoItem post(String task);

	TodoItem setTask(K id, String task);

	TodoItem toggleChecked(K id);

	void deleteAll();

	void deleteOne(K id);
}