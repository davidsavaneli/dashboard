import { useState } from 'react'
import { ContentLayout, Card, Button, Dialog } from '../../components'

const DialogPage = () => {
  const [open, setOpen] = useState(false)

  const handleDialogOpen = () => setOpen(true)
  const handleDialogClose = () => setOpen(false)

  return (
    <ContentLayout label='Dialog Component'>
      <div className='row'>
        <div className='col-6'>
          <Card title='Default'>
            <Button onClick={handleDialogOpen}>Open Dialog</Button>
            <Dialog
              open={open}
              onClose={handleDialogClose}
              title='Dialog Title'
              actions={
                <>
                  <Button onClick={handleDialogClose} variant='transparent' color='error'>
                    Cancel
                  </Button>
                  <Button onClick={() => console.log('Save')}>Save</Button>
                </>
              }
            >
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, nisi iste mollitia excepturi quidem quas,
                accusamus aliquid laborum atque nulla nesciunt vitae molestiae ipsum tempore, earum modi. Illo, dolore
                amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, nisi iste mollitia excepturi quidem
                quas, accusamus aliquid laborum atque nulla nesciunt vitae molestiae ipsum tempore, earum modi. Illo,
                dolore amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, nisi iste mollitia excepturi
                quidem quas, accusamus aliquid laborum atque nulla nesciunt vitae molestiae ipsum tempore, earum modi.
                Illo, dolore amet.
              </div>
            </Dialog>
          </Card>
        </div>
      </div>
    </ContentLayout>
  )
}

export default DialogPage
