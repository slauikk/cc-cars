import clsx from "clsx"
import {FC} from "react"

import {PageItem} from "../../components/page-item"
import {PageLayout} from "../../layouts"

import styles from "./index.module.scss"
import {dataContent} from "./lib/dataContent"

interface IWorkbench{}

export const Workbench: FC<IWorkbench> = () => {
  return (
    <PageLayout title={<>Освітня програма "Верстатник широкого профілю"</>}>
      {dataContent.map((e, i) => (
        <PageItem {...e} key={i} />
      ))}
    </PageLayout>
  )
}
