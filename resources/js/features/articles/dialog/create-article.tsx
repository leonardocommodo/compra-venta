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
        code: z
            .string()
            .nonempty('El código es obligatorio')
            .min(3, 'El código debe tener al menos 3 caracteres')
            .max(10, 'El código debe tener como máximo 10 caracteres'),
        name: z
            .string()
            .nonempty('El nombre es obligatorio')
            .min(10, 'El nombre debe tener al menos 10 caracteres')
            .max(50, 'El nombre debe tener como máximo 50 caracteres'),
        minStock: z.coerce.number().min(0, 'El stock mínimo no puede ser negativo'),
        stock: z.coerce.number().min(0, 'El stock no puede ser negativo'),
        salePrice: z.coerce.number().min(0, 'El precio de venta no puede ser negativo'),
        costPrice: z.coerce.number().min(0, 'El precio de compra no puede ser negativo'),
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

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        const payload = {
            code: data.code,
            name: data.name,
            min_stock: Number(data.minStock),
            stock: Number(data.stock),
            sell_price: Number(data.salePrice),
            cost_price: Number(data.costPrice),
            category_id: Number(data.categoryId),
            measurement_unit_id: Number(data.measurementUnitId),
        };

        try {
            const response = await fetch('/articles', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '',
                },
                credentials: 'same-origin', // 🔥 IMPORTANTE
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error('Error al crear el artículo');
            }

            toast.success('Artículo creado correctamente');

            form.reset();
        } catch (error) {
            console.log(error);
            toast.error('Error al crear el artículo');
        }
    };

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
                                            id="form-rhf-demo-title"
                                            aria-invalid={fieldState.invalid}
                                            value={field.value}
                                            onChange={(e) => field.onChange(e.target.value === '' ? '' : Number(e.target.value))}
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
                                            id="form-rhf-demo-title"
                                            aria-invalid={fieldState.invalid}
                                            value={field.value}
                                            onChange={(e) => field.onChange(e.target.value === '' ? '' : Number(e.target.value))}
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
                                            id="form-rhf-demo-title"
                                            aria-invalid={fieldState.invalid}
                                            value={field.value}
                                            onChange={(e) => field.onChange(e.target.value === '' ? '' : Number(e.target.value))}
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
                                            id="form-rhf-demo-title"
                                            aria-invalid={fieldState.invalid}
                                            value={field.value}
                                            onChange={(e) => field.onChange(e.target.value === '' ? '' : Number(e.target.value))}
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
                                        <FieldLabel htmlFor="categoryId">Categorías</FieldLabel>
                                        <Select name={field.name} onValueChange={field.onChange} value={field.value}>
                                            <SelectTrigger id="categoryId" className={`w-full ${fieldState.invalid ? 'border-destructive' : ''}`}>
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
                                        <FieldLabel htmlFor="measurementUnitId">Unidad de medida</FieldLabel>
                                        <Select name={field.name} onValueChange={field.onChange} value={field.value}>
                                            <SelectTrigger
                                                id="measurementUnitId"
                                                className={`w-full ${fieldState.invalid ? 'border-destructive' : ''}`}
                                            >
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
