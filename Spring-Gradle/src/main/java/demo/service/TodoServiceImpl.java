package demo.service;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.UUID;

import org.springframework.stereotype.Component;

import demo.api.dto.TodoItem;
import demo.api.dto.TodoItemRepository;

@Component
public class TodoServiceImpl implements TodoService<UUID> {

	private final TodoItemRepository repo;

	public TodoServiceImpl(TodoItemRepository repo) {
		this.repo = repo;
	}

	@Override
	public List<TodoItem> getAll() {
		List<TodoItem> items = new ArrayList<>();
		repo.findAll().forEach(o -> items.add(o));
		return items;
	}

	@Override
	public TodoItem getOne(UUID id) {
		return repo.findById(id).orElseThrow(() -> new NoSuchElementException("Todo Item #" + id));
	}

	@Override
	public TodoItem post(String task) {
		return repo.save(TodoItem.builder().task(task).build());
	}

	@Override
	public TodoItem setTask(UUID id, String task) {
		TodoItem item = repo.findById(id).orElse(new TodoItem());
		item.setTask(task);
		return repo.save(item);
	}

	@Override
	public TodoItem toggleChecked(UUID id) {
		TodoItem find = repo.findById(id).orElseThrow(() -> new NoSuchElementException("Todo Item #" + id));
		find.setChecked(!find.isChecked());
		return repo.save(find);
	}

	@Override
	public void deleteAll() {
		repo.deleteAll();
	}

	@Override
	public void deleteOne(UUID id) {
		repo.deleteById(id);
	}
}