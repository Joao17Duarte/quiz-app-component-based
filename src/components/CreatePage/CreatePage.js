import CreateForm from '../CreateForm/CreateForm'
import createElement from '../../lib/createElement'
import './CreatePage.css'

export default function CreatePage(onSubmit) {
  const el = createElement(
    'main',
    { className: 'CreatePage', hidden: false },
    CreateForm(onSubmit)
  )

  function show() {
    el.hidden = false
  }

  function hide() {
    el.hidden = true
  }

  return {
    el,
    show,
    hide,
  }
}
