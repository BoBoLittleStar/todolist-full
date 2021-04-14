package demo.api;

import java.util.List;
import java.util.UUID;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import demo.api.dto.TodoItem;
import demo.service.TodoService;

@CrossOrigin
@RestController
public class TodoController {
	private final TodoService<UUID> service;

	public TodoController(TodoService<UUID> service) {
		this.service = service;
	}

	@GetMapping("/todo")
	@ResponseStatus(code = HttpStatus.OK)
	public List<TodoItem> getAll() {
		return service.getAll();
	}

	@GetMapping("/todo/{id}")
	@ResponseStatus(code = HttpStatus.OK)
	public TodoItem getOne(@PathVariable UUID id) {
		return service.getOne(id);
	}

	@PostMapping("/todo")
	@ResponseStatus(code = HttpStatus.CREATED)
	public TodoItem post(@RequestBody String task) {
		return service.post(task);
	}

	@PutMapping("/todo/{id}/task")
	@ResponseStatus(code = HttpStatus.OK)
	public TodoItem setTask(@PathVariable UUID id, @RequestBody String task) {
		return service.setTask(id, task);
	}

	@PutMapping("/todo/{id}/check")
	@ResponseStatus(code = HttpStatus.OK)
	public TodoItem toggleChecked(@PathVariable UUID id) {
		return service.toggleChecked(id);
	}

	@DeleteMapping("/todo")
	@ResponseStatus(code = HttpStatus.NO_CONTENT)
	public void delete() {
		service.deleteAll();
	}

	@DeleteMapping("/todo/{id}")
	@ResponseStatus(code = HttpStatus.NO_CONTENT)
	public void deleteOne(@PathVariable UUID id) {
		service.deleteOne(id);
	}
}