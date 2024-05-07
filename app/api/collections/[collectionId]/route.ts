import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import { connectToDB } from "@/lib/mongoDB";
import Collection from "@/lib/models/Collection";

export const GET = async (req: NextRequest, {params}:{ params: {collectionId: string}}) => {
    try {
        const collection = await Collection.findById(params.collectionId)

        if(!collection){
            return new NextResponse(JSON.stringify({message:"Coleção não encontrada"}), {status: 404})
        }

        return NextResponse.json(collection, {status: 200})

    } catch (error) {
        console.log("collectionId_GET",error);
        return new NextResponse("Internal error", { status: 500 })
        
    }
}

export const POST = async (req: NextRequest, {params}:{ params: {collectionId: string}}) => {
    try {
        const {userId} = auth();

        if(!userId){
            return new NextResponse("Não autorizado!", {status: 401})
        }

        await connectToDB();

        let collection = await Collection.findById(params.collectionId)

        if(!collection){
            return new NextResponse("Coleção não encontrada!", {status: 404})
        }

        const {title, description, image} = await req.json()

        if(!title || !image){
            return new NextResponse("Título e imagem são obrigatórios!", {status: 400})
        }

        collection = await Collection.findByIdAndUpdate(params.collectionId, {title, description, image}, {new: true})

        await collection.save()

        return NextResponse.json(collection, {status: 200})
        
    } catch (error) {
        console.log("[collection_POST]", error);
        return new NextResponse("Internal erro", {status: 500})
    }
}

export const DELETE = async (req: NextRequest, {params}:{ params: {collectionId: string}}) => {
    try {
        const {userId} = auth();

        if(!userId){
            return new NextResponse("Não autorizado",{status: 401})
        }

        await connectToDB()

        await Collection.findByIdAndDelete(params.collectionId)
        return new NextResponse("Collection is delete", {status: 200})
    } catch (error) {
        console.log("[collectionId_DELETE]",error);
        return new NextResponse("Internal error", {status: 500 })
    }
}