package demo.api.dto;

import java.util.UUID;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Builder
@Table(name = "todo")
@NoArgsConstructor
@AllArgsConstructor
public class TodoItem {
	private @Id @GeneratedValue @Getter UUID id;
	private @Setter @Getter String task;
	private @Setter @Getter boolean checked;
//	private @Getter final ZonedDateTime dateCreated = ZonedDateTime.now();
//	private @Builder.Default @Getter ZonedDateTime dateModified = ZonedDateTime.now();

//	public void setTask(String task) {
//		this.task = task;
//		dateModified = ZonedDateTime.now();
//	}

//	public void setChecked() {
//		checked = true;
//		dateModified = ZonedDateTime.now();
//	}
}