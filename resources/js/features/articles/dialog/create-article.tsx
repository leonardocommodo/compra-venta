import { Button } from '@/components/ui/button';
import { DialogClose, DialogFooter } from '@/components/ui/dialog';
import DialogWrapper from '@/components/ui/DialogWrapper';
import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Category } from '@/models/Category';
import { MeasurementUnit } from '@/models/MeasurementUnit';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';

interface Props {
    categories: Category[];
    measurementUnits: MeasurementUnit[];
}

export function CreateArticleDialog({ categories, measurementUnits }: Props) {
    const formSchema = z.object({
        code: z.string().nonempty().min(3, 'El código debe tener al menos 3 caracteres').max(10, 'El código debe tener como máximo 10 caracteres'),
        name: z.string().nonempty().min(10, 'El nombre debe tener al menos 10 caracteres').max(50, 'El nombre debe tener como máximo 50 caracteres'),
        minStock: z.number().min(0, 'El stock mínimo no puede ser negativo'),
        stock: z.number().min(0, 'El stock no puede ser negativo'),
        salePrice: z.number().min(0, 'El precio de venta no puede ser negativo'),
        costPrice: z.number().min(0, 'El precio de compra no puede ser negativo'),
        categoryId: z.string().nonempty('Debe seleccionar una categoría'),
        measurementUnitId: z.string().nonempty('Debe seleccionar una unidad de medida'),
    });
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            code: '',
            name: '',
            minStock: 0,
            stock: 0,
            salePrice: 0,
            costPrice: 0,
            categoryId: '',
            measurementUnitId: '',
        },
    });

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        console.log(data);
        toast('You submitted the following values:', {
            description: (
                <pre className="bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4">
                    <code>{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
            position: 'bottom-right',
            classNames: {
                content: 'flex flex-col gap-2',
            },
            style: {
                '--border-radius': 'calc(var(--radius)  + 4px)',
            } as React.CSSProperties,
        });
    }

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
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FieldGroup>
                    <div className="mb-6 grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Controller
                                name="code"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="code">Código</FieldLabel>
                                        <Input
                                            {...field}
                                            id="form-rhf-demo-title"
                                            aria-invalid={fieldState.invalid}
                                            placeholder="Ingrese un codigo"
                                            autoComplete="off"
                                        />
                                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                    </Field>
                                )}
                            />
                        </div>
                        <div className="grid gap-2">
                            <Controller
                                name="name"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="code">Nombre</FieldLabel>
                                        <Input
                                            {...field}
                                            id="form-rhf-demo-title"
                                            aria-invalid={fieldState.invalid}
                                            placeholder="Ingrese el nombre del articulo"
                                            autoComplete="off"
                                        />
                                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                    </Field>
                                )}
                            />
                        </div>
                        <div className="grid gap-2">
                            <Controller
                                name="minStock"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="code">Stock mínimo</FieldLabel>
                                        <Input
                                            {...field}
                                            id="form-rhf-demo-title"
                                            aria-invalid={fieldState.invalid}
                                            defaultValue={10}
                                            type="number"
                                            min={0}
                                            autoComplete="off"
                                        />
                                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                    </Field>
                                )}
                            />
                        </div>
                        <div className="grid gap-2">
                            <Controller
                                name="stock"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="code">Stock</FieldLabel>
                                        <Input
                                            {...field}
                                            id="form-rhf-demo-title"
                                            aria-invalid={fieldState.invalid}
                                            defaultValue={0}
                                            type="number"
                                            min={0}
                                            autoComplete="off"
                                        />
                                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                    </Field>
                                )}
                            />
                        </div>
                        <div className="grid gap-2">
                            <Controller
                                name="salePrice"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="code">Precio de venta</FieldLabel>
                                        <Input
                                            {...field}
                                            id="form-rhf-demo-title"
                                            aria-invalid={fieldState.invalid}
                                            defaultValue={0}
                                            type="number"
                                            min={0}
                                            autoComplete="off"
                                        />
                                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                    </Field>
                                )}
                            />
                        </div>
                        <div className="grid gap-2">
                            <Controller
                                name="costPrice"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="code">Precio de compra</FieldLabel>
                                        <Input
                                            {...field}
                                            id="form-rhf-demo-title"
                                            aria-invalid={fieldState.invalid}
                                            defaultValue={0}
                                            type="number"
                                            min={0}
                                            autoComplete="off"
                                        />
                                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                    </Field>
                                )}
                            />
                        </div>
                        <div className="grid gap-2">
                            <Controller
                                name="categoryId"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="category">Categorías</FieldLabel>
                                        <Select>
                                            <SelectTrigger {...field} id="category" className="w-full">
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
                                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                    </Field>
                                )}
                            />
                        </div>
                        <div className="grid gap-2">
                            <Controller
                                name="measurementUnitId"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="measurementUnit">Unidad de medida</FieldLabel>
                                        <Select>
                                            <SelectTrigger {...field} id="measurementUnit" className="w-full">
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
                                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                    </Field>
                                )}
                            />
                        </div>
                    </div>
                </FieldGroup>

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
