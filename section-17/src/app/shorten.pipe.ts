import { Component, Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'shorten'
})
export class ShotenPipe implements PipeTransform{
    transform(value: any, limit:number) {
        if (value.length > limit) {
            return value.substr(0, limit) + ' ...'
        }
        return value
    }
}