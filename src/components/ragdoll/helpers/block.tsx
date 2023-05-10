import { forwardRef } from 'react'
import { RoundedBox } from '@react-three/drei'
import type { Mesh } from 'three'
import type { MaterialProps } from '@react-three/fiber'

export const Block = forwardRef<Mesh, MaterialProps>(({ children, transparent = false, opacity = 1, color = 'white', args = [1, 1, 1], ...props }, ref) => {
  return (
    <RoundedBox args={args} receiveShadow castShadow ref={ref} {...props}>
      <meshStandardMaterial color={color} transparent={transparent} opacity={opacity} />
      {children}
    </RoundedBox>
  )
})
