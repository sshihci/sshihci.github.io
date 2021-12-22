import { MainSubject as MainSubjectRoot } from './MainSubject'
import { MainSubjectLabel } from './MainSubjectLabel'
import { MainSubjectName } from './MainSubjectName'

type MainSubject = typeof MainSubjectRoot & {
  Label: typeof MainSubjectLabel
  Name: typeof MainSubjectName
}

const MainSubject = MainSubjectRoot as MainSubject
MainSubject.Label = MainSubjectLabel
MainSubject.Name = MainSubjectName

export default MainSubject
