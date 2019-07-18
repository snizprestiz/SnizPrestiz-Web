import { Element } from './../Element';

/**
 * Obalovací prvek pro akční tlačítka (například formuláře)
 *
 * Tlačítka jsou **řazeny z pravé strany doleva**.
 * Je to tak vyřešeno kvůli navigaci mezi prvky formuláře
 * na klávesnici - je větší pravděpodobnost, že uživatel chce provést
 * akci primárního tlačítka a proto se vybere jako první, i když je opticky "poslední"
 */
export class ButtonContainer extends Element{
	public get ClassName(): string { return `ButtonContainer`; }
}
