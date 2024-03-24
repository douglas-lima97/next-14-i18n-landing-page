import { tv, VariantProps } from 'tailwind-variants'
import { NavigationItemProps } from './navigation-item.types'
import Link from 'next/link'

const navigationItemVariants = tv({
    variants: {
        active: {
            true: 'font-medium opacity-100',
            false: 'font-normal opacity-50 transition-opacity duration-300 hover:opacity-100',
        },
    },
    defaultVariants: {
        active: false,
    },
})

export const NavigationItem = ({
    active,
    className,
    label,
    href,
    ...props
}: NavigationItemProps<VariantProps<typeof navigationItemVariants>>) => {
    return (
        <li className={navigationItemVariants({ active, className })} {...props}>
            <Link href={href}>{label}</Link>
        </li>
    )
}

export default NavigationItem
