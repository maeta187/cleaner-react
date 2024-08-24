import type { ReactNode } from 'react'

interface DialogProps {
  children: ReactNode
  header: string
  open: boolean
  onClose: () => void
}

export const Dialog = ({ children, header, open, onClose }: DialogProps) => {
  return (
    <dialog open={open}>
      <div className='iconWrapper'>
        <button type='button' onClick={onClose}>
          ✖️
        </button>
      </div>
      <h2 className='dialogTitle'>{header}</h2>
      {children}
    </dialog>
  )
}
