import { Button } from '@/components/ui/button';
import { DialogClose, DialogFooter } from '@/components/ui/dialog';
import DialogWrapper from '@/components/ui/DialogWrapper';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Category } from '@/models/Category';
import { MeasurementUnit } from '@/models/MeasurementUnit';

interface Props {
    categories: Category[];
    measurementUnits: MeasurementUnit[];
}

export function CreateArticleDialog({ categories, measurementUnits }: Props) {
    return (
        <DialogWrapper
            trigger={
                <Button variant={'default'} className="mb-2 cursor-pointer">
                    Crear nuevo articulo
                </Button>
            }
            title="Crear artículo"
            className="w-full max-w-[40rem]"
            description="Rellena los datos del artículo"
        >
            <form onSubmit={() => { }}>
                <div className="mb-6 grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="code-1">Código</Label>
                        <Input id="code-1" name="code" defaultValue="" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="name-1">Nombre</Label>
                        <Input id="name-1" name="name" defaultValue="" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="name-1">Stock mínimo</Label>
                        <Input id="name-1" name="name" defaultValue="10" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="name-1">Stock</Label>
                        <Input id="name-1" name="name" defaultValue="0" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="name-1">Precio de venta</Label>
                        <Input id="name-1" name="name" defaultValue="" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="name-1">Precio de compra</Label>
                        <Input id="name-1" name="name" defaultValue="" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="name-1">Categorias</Label>
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Seleccione una categoria" />
                            </SelectTrigger>
                            <SelectContent>
                                {categories.map((category) => (
                                    <SelectItem key={category.id} value={category.id.toString()}>
                                        {category.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="name-1">Unidad de medida</Label>
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Seleccione una unidad de medida" />
                            </SelectTrigger>
                            <SelectContent>
                                {measurementUnits.map((measurementUnit) => (
                                    <SelectItem key={measurementUnit.id} value={measurementUnit.id.toString()}>
                                        {measurementUnit.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline">Cancelar</Button>
                    </DialogClose>
                    <Button type="submit">Crear articulo</Button>
                </DialogFooter>
            </form>
        </DialogWrapper>
    );
}

export default CreateArticleDialog;
