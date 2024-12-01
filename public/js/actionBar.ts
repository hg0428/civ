import { GameEvent, InteractiveElement } from "./interactive.ts";
import { Circle, Rectangle, Thing, Vector2, draw, Drawable } from "./shapes.ts";
import { People } from "./people.ts";

export type ActionType = 'idle' | 'move' | 'work' | 'fight';

export interface Action {
    type: ActionType;
    target?: Vector2;
    effectiveness?: number;
}

export class ActionButton extends InteractiveElement<Circle> {
    action: ActionType;
    tooltip: string;

    constructor(position: Vector2, action: ActionType) {
        super({
            position,
            shape: new Circle(30),
            strokeStyle: 'black',
            fillStyle: '#4a90e2',
            strokeWidth: 2,
            isMapElement: false
        });
        this.action = action;
        this.tooltip = action.charAt(0).toUpperCase() + action.slice(1);
    }
    draw(ctx: CanvasRenderingContext2D, elapsed: number, gameEvent: GameEvent) {
        super.draw(ctx, elapsed, gameEvent);
        
        // Draw action icon/text
        ctx.fillStyle = 'white';
        ctx.font = '20px Sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(this.action[0].toUpperCase(), this.position.x, this.position.y);

        // Draw tooltip on hover
        if (this.hovering) {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
            ctx.fillRect(
                this.position.x - 40,
                this.position.y - 60,
                80,
                30
            );
            ctx.fillStyle = 'white';
            ctx.font = '16px Sans-serif';
            ctx.fillText(this.tooltip, this.position.x, this.position.y - 45);
        }
    }
}

export class ActionBar implements Drawable {
    position: Vector2;
    width: number;
    height: number;
    actions: ActionButton[] = [];
    selectedGroup?: People;
    background: Thing<Rectangle>;

    constructor(canvasWidth: number, canvasHeight: number) {
        this.width = Math.min(400, canvasWidth - 40);
        this.height = 80;
        this.position = {
            x: canvasWidth / 2,
            y: canvasHeight - this.height / 2 - 20
        };

        // Create background
        this.background = new Thing({
            position: this.position,
            shape: new Rectangle(this.width, this.height),
            fillStyle: 'rgba(50, 50, 50, 0.9)',
            strokeStyle: 'rgba(255, 255, 255, 0.3)',
            strokeWidth: 2
        });

        // Create action buttons
        const actions: ActionType[] = ['move', 'work', 'fight'];
        const buttonSpacing = 80;
        const startX = this.position.x - ((actions.length - 1) * buttonSpacing) / 2;

        actions.forEach((action, index) => {
            const button = new ActionButton(
                {
                    x: startX + index * buttonSpacing,
                    y: this.position.y
                },
                action
            );
            this.actions.push(button);
        });
    }

    setSelectedGroup(group: People | undefined) {
        this.selectedGroup = group;
        // TODO: Update button states based on what actions are available
    }

    draw(ctx: CanvasRenderingContext2D, elapsed: number, gameEvent: GameEvent) {
        console.log("draw action button");
        if (!this.selectedGroup) return;

        // Draw background
        this.background.draw(ctx, elapsed, gameEvent);

        // Draw group info
        ctx.fillStyle = 'white';
        ctx.font = '18px Sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText(
            `Group Size: ${this.selectedGroup.quantity}`,
            this.position.x - this.width/2 + 20,
            this.position.y - 20
        );

        // Draw action buttons
        this.actions.forEach(button => button.draw(ctx, elapsed, gameEvent));
    }
}
