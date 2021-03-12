import { Controller } from "stimulus"

export default class extends Controller {
	static targets = ["button"]

	reset() {
		console.log("EU TO AQUIIIIIIIIIIIIIIIIIIIIIII")
		this.element.reset()
		this.buttonTarget.disabled = false
	}
}
