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

	public get Secondary(): boolean {
		return this.Root.classList.contains(`SecondaryButton`);
	}

	public set Secondary(v: boolean) {
		if(v) this.Root.classList.add(`SecondaryButton`);
		else this.Root.classList.remove(`SecondaryButton`);
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
		if (options.Secondary != null) this.Secondary = options.Secondary;
		if (options.Destructive != null) this.Destructive = options.Destructive;

		return this;
	}
}
