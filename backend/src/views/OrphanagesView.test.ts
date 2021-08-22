import * as OrphanagesView from "./OrphanagesView"
import * as class_transformer from "class-transformer"
import * as Orphanages from "../models/Orphanages"
// @ponicode
describe("OrphanagesView.default.render", () => {
    test("0", () => {
        let callFunction: any = () => {
            OrphanagesView.default.render(class_transformer.plainToClass(Orphanages.Orphanage,{ name: "dummy_name/", latitude: -100, longitude: 100, about: "Customer Metrics Consultant", instructions: "dedicated", opening_hours: "Extensions", open_on_weekends: false }))
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            OrphanagesView.default.render(class_transformer.plainToClass(Orphanages.Orphanage,{ name: "dummyname", latitude: 100, longitude: -100, about: "Customer Metrics Consultant", instructions: "dedicated", opening_hours: "Harbors", open_on_weekends: true }))
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            OrphanagesView.default.render(class_transformer.plainToClass(Orphanages.Orphanage,{ name: "dummyname", latitude: -5.48, longitude: 100, about: "Senior Brand Assistant", instructions: "logistical", opening_hours: "Extensions", open_on_weekends: false }))
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            OrphanagesView.default.render(class_transformer.plainToClass(Orphanages.Orphanage,{ name: "dummyname", latitude: -5.48, longitude: 100, about: "Product Accountability Executive", instructions: "logistical", opening_hours: "Expressway", open_on_weekends: false }))
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            OrphanagesView.default.render(class_transformer.plainToClass(Orphanages.Orphanage,{ name: "dummy_name", latitude: 0, longitude: -100, about: "Senior Brand Assistant", instructions: "value-added", opening_hours: "Expressway", open_on_weekends: false }))
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            OrphanagesView.default.render(class_transformer.plainToClass(Orphanages.Orphanage,{ name: "", latitude: NaN, longitude: NaN, about: "", instructions: "", opening_hours: "", open_on_weekends: true }))
        }
    
        expect(callFunction).not.toThrow()
    })
})
