import type { BunRequest } from "bun"

export const singin = {
    async GET(req: BunRequest) {
        return Response.json({
            message: "Login successful"
        })
    }
}
