import { tv, VariantProps } from 'tailwind-variants'
import { ButtonProps } from './button.types'

const buttonVariants = tv({
    base: 'rounded-lg px-8 py-3 text-white shadow-md transition duration-300',
    variants: {
        variant: {
            outlined:
                'border border-primary-300 bg-primary-50/5 shadow-primary-300/15 hover:border-primary-600 active:bg-primary-300/10',
            contained:
                'bg-gradient-to-br from-primary-300 to-pink-700 shadow-primary-300/35 hover:bg-pink-700 active:bg-pink-800',
        },
    },
    defaultVariants: {
        variant: 'contained',
    },
})

export const Button = ({
    variant,
    className,
    children,
    ...props
}: ButtonProps<VariantProps<typeof buttonVariants>>) => {
    return (
        <button className={buttonVariants({ variant, className })} {...props}>
            {children}
        </button>
    )
}

export default Button
