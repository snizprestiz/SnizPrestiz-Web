import { ButtonOptions } from './ButtonOptions';
import { Child } from '../Child';
import { Element } from '../Element';

export class Button extends Element{
	protected get TagName(): string { return `button`; }
	protected Root: HTMLButtonElement;

	public get Enabled(): boolean {
		return !this.Root.disabled;
	}

	public set Enabled(v: boolean) {
		this.Root.disabled = !v;
	}

	public get Submit(): boolean {
		return this.Root.type == `submit`;
	}

	public set Submit(v: boolean) {
		this.Root.type = v ? `submit` : `button`;
	}

	public get Primary(): boolean {
		return this.Root.classList.contains(`PrimaryButton`);
	}

	public set Primary(v: boolean) {
		if(v) this.Root.classList.add(`PrimaryButton`);
		else this.Root.classList.remove(`PrimaryButton`);
	}

	public get Destructive(): boolean {
		return this.Root.classList.contains(`DestructiveButton`);
	}

	public set Destructive(v: boolean) {
		if(v) this.Root.classList.add(`DestructiveButton`);
		else this.Root.classList.remove(`DestructiveButton`);
	}

	public constructor(options: ButtonOptions, ...children: Child[]) {
		super(...children);
		this.Options(options);
	}

	public Options(options: ButtonOptions): this{
		super.Options(options);

		if (options.Enabled != null) this.Enabled = options.Enabled;
		if (options.Submit != null) this.Submit = options.Submit;
		if (options.Primary != null) this.Primary = options.Primary;
		if (options.Destructive != null) this.Destructive = options.Destructive;

		return this;
	}
}
