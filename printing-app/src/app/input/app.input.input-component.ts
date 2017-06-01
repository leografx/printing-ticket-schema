import { Component } from "@angular/core";

@Component({
	selector:'input-group',
	template:`
		<label for="basic-url">{{ label }}</label>
		<div class="input-group">
		  <span class="input-group-addon" id="{{ labelid }}">{{ addonLabel }}</span>
		  <input type="text" class="form-control" id="basic-url" aria-describedby="{{ labelid }}">
		</div>
	`
})
export class InputComponent{
	label;
	labelId;
	addonLabel;


}