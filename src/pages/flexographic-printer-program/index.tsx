import clsx from "clsx"
import {FC} from "react"

import {PageItem} from "../../components/page-item"
import {PageLayout} from "../../layouts"

import styles from "./index.module.scss"
import {dataContent} from "./lib/dataContent"

interface IFlexographicPrinterProgram {}

export const FlexographicPrinterProgram: FC<IFlexographicPrinterProgram> = () => {
  return (
    <PageLayout title={<>Освітня програма "Друкар флексографічного друкування"</>}>
      {dataContent.map((e, i) => (
        <PageItem {...e} key={i} />
      ))}
    </PageLayout>
  )
}

