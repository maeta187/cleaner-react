import { Dialog } from '@/component/Dialog'

interface DialogProps {
  open: boolean
  onClose: () => void
}

export const UpdateTodoDialog = ({ open, onClose }: DialogProps) => {
  return (
    <Dialog open={open} onClose={onClose} header='新規TODOの追加'>
      <form className='todoForm'>
        <select id='status'>
          <option value='DONE'>やったこと</option>
          <option value='TODO'>今日やること</option>
          <option value='PARKING'>いつかやること</option>
        </select>
        <div className='dialogActionButtonWrapper'>
          <button className='dialogActionNegativeButton' type='button'>
            キャンセル
          </button>
          <button className='dialogActionPositiveButton' type='submit'>
            更新
          </button>
        </div>
      </form>
    </Dialog>
  )
}
