import { Dialog } from './Dialog'

interface DialogProps {
  open: boolean
  onClose: () => void
}

export const CreateTodoDialog = ({ open, onClose }: DialogProps) => {
  return (
    <Dialog open={open} onClose={onClose} header='新規TODOの追加'>
      <form className='todoForm'>
        <div className='formElement'>
          <label htmlFor='title'>TODOのタイトル</label>
          <input name='title' id='title' />
        </div>
        <div className='formElement'>
          <label htmlFor='title'>TODOの内容</label>
          <input name='description' id='description' />
        </div>
        <div className='formElement'>
          <label htmlFor='deadline'>TODOの期限</label>
          <input name='deadline' id='deadline' />
        </div>
        <div className='dialogActionButtonWrapper'>
          <button className='dialogActionNegativeButton' type='button'>
            キャンセル
          </button>
          <button className='dialogActionPositiveButton' type='submit'>
            追加
          </button>
        </div>
      </form>
    </Dialog>
  )
}
